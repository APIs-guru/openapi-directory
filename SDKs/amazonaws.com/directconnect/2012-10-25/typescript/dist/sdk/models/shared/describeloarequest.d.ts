import { SpeakeasyBase } from "../../../internal/utils";
import { LoaContentTypeEnum } from "./loacontenttypeenum";
export declare class DescribeLoaRequest extends SpeakeasyBase {
    connectionId: string;
    loaContentType?: LoaContentTypeEnum;
    providerName?: string;
}
