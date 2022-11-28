import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
export declare class BatchDeleteConnectionResponse extends SpeakeasyBase {
    errors?: Map<string, ErrorDetail>;
    succeeded?: string[];
}
