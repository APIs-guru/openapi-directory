import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageVersion } from "./imageversion";
export declare class ListImagesResponse extends SpeakeasyBase {
    imageVersionList?: ImageVersion[];
    nextToken?: string;
    requestId?: string;
}
