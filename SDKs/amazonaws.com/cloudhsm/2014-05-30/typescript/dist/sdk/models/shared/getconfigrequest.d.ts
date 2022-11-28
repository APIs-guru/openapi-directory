import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVersionEnum } from "./clientversionenum";
export declare class GetConfigRequest extends SpeakeasyBase {
    clientArn: string;
    clientVersion: ClientVersionEnum;
    hapgList: string[];
}
