import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Error extends SpeakeasyBase {
    code: number;
    details?: Map<string, any>;
    href: string;
    message: string;
    statusCode: number;
}
