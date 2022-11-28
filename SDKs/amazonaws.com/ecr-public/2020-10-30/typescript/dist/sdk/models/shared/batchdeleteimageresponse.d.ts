import { SpeakeasyBase } from "../../../internal/utils";
import { ImageFailure } from "./imagefailure";
import { ImageIdentifier } from "./imageidentifier";
export declare class BatchDeleteImageResponse extends SpeakeasyBase {
    failures?: ImageFailure[];
    imageIds?: ImageIdentifier[];
}
