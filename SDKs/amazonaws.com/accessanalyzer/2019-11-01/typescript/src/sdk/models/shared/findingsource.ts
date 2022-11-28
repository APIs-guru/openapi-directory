import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingSourceDetail } from "./findingsourcedetail";
import { FindingSourceTypeEnum } from "./findingsourcetypeenum";



// FindingSource
/** 
 * The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
**/
export class FindingSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: FindingSourceDetail;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: FindingSourceTypeEnum;
}
