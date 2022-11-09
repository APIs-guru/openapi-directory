import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageFailure } from "./imagefailure";
import { Image } from "./image";
export declare class BatchGetImageResponse extends SpeakeasyBase {
    failures?: ImageFailure[];
    images?: Image[];
}
