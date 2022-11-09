import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientVersionEnum } from "./clientversionenum";
export declare class GetConfigRequest extends SpeakeasyBase {
    clientArn: string;
    clientVersion: ClientVersionEnum;
    hapgList: string[];
}
