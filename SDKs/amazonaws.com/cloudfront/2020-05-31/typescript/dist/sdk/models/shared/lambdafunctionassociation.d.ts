import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
/**
 * A complex type that contains a Lambda@Edge function association.
**/
export declare class LambdaFunctionAssociation extends SpeakeasyBase {
    eventType: EventTypeEnum;
    includeBody?: boolean;
    lambdaFunctionArn: string;
}
