import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageSummary } from "./imagesummary";
export declare class ListImagePipelineImagesResponse extends SpeakeasyBase {
    imageSummaryList?: ImageSummary[];
    nextToken?: string;
    requestId?: string;
}
