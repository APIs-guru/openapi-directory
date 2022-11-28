import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateInterconnectRequest extends SpeakeasyBase {
    bandwidth: string;
    interconnectName: string;
    lagId?: string;
    location: string;
    providerName?: string;
    tags?: Tag[];
}
