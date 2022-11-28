import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionStageEnum } from "./functionstageenum";
/**
 * Contains metadata about a CloudFront function.
**/
export declare class FunctionMetadata extends SpeakeasyBase {
    createdTime?: Date;
    functionArn: string;
    lastModifiedTime: Date;
    stage?: FunctionStageEnum;
}
