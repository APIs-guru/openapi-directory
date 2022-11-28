import { SpeakeasyBase } from "../../../internal/utils";
import { TestGridSessionArtifactCategoryEnum } from "./testgridsessionartifactcategoryenum";
export declare class ListTestGridSessionArtifactsRequest extends SpeakeasyBase {
    maxResult?: number;
    nextToken?: string;
    sessionArn: string;
    type?: TestGridSessionArtifactCategoryEnum;
}
