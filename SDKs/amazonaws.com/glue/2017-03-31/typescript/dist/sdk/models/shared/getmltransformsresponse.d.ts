import { SpeakeasyBase } from "../../../internal/utils";
import { MlTransform } from "./mltransform";
export declare class GetMlTransformsResponse extends SpeakeasyBase {
    nextToken?: string;
    transforms: MlTransform[];
}
