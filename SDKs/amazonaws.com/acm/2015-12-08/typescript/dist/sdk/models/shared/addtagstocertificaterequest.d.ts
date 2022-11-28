import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class AddTagsToCertificateRequest extends SpeakeasyBase {
    certificateArn: string;
    tags: Tag[];
}
