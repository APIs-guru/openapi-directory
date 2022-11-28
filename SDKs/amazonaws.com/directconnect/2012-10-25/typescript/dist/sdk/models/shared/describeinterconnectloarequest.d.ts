import { SpeakeasyBase } from "../../../internal/utils";
import { LoaContentTypeEnum } from "./loacontenttypeenum";
export declare class DescribeInterconnectLoaRequest extends SpeakeasyBase {
    interconnectId: string;
    loaContentType?: LoaContentTypeEnum;
    providerName?: string;
}
