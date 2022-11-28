import { SpeakeasyBase } from "../../../internal/utils";
import { FindingSourceDetail } from "./findingsourcedetail";
import { FindingSourceTypeEnum } from "./findingsourcetypeenum";
/**
 * The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
**/
export declare class FindingSource extends SpeakeasyBase {
    detail?: FindingSourceDetail;
    type: FindingSourceTypeEnum;
}
