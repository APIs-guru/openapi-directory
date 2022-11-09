import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FindingSourceDetail } from "./findingsourcedetail";
import { FindingSourceTypeEnum } from "./findingsourcetypeenum";


// FindingSource
/** 
 * The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
**/
export class FindingSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: FindingSourceDetail;

  @Metadata({ data: "json, name=type" })
  type: FindingSourceTypeEnum;
}
