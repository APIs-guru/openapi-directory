import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImagePipeline } from "./imagepipeline";
export declare class ListImagePipelinesResponse extends SpeakeasyBase {
    imagePipelineList?: ImagePipeline[];
    nextToken?: string;
    requestId?: string;
}
