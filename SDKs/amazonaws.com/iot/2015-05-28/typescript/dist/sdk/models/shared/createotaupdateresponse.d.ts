import { SpeakeasyBase } from "../../../internal/utils";
import { OtaUpdateStatusEnum } from "./otaupdatestatusenum";
export declare class CreateOtaUpdateResponse extends SpeakeasyBase {
    awsIotJobArn?: string;
    awsIotJobId?: string;
    otaUpdateArn?: string;
    otaUpdateId?: string;
    otaUpdateStatus?: OtaUpdateStatusEnum;
}
