import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ImportReadStatusEnum {
    Succeeded = "succeeded",
    Failed = "failed"
}
export declare class ImportRead extends SpeakeasyBase {
    reason?: string;
    status: ImportReadStatusEnum;
}
