import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class CreateEventBusRequest extends SpeakeasyBase {
    eventSourceName?: string;
    name: string;
    tags?: Tag[];
}
