import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedMethods } from "./allowedmethods";
import { ForwardedValues } from "./forwardedvalues";
import { LambdaFunctionAssociations } from "./lambdafunctionassociations";
import { TrustedSigners } from "./trustedsigners";
import { ViewerProtocolPolicyEnum } from "./viewerprotocolpolicyenum";
/**
 * A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
**/
export declare class DefaultCacheBehavior extends SpeakeasyBase {
    allowedMethods?: AllowedMethods;
    compress?: boolean;
    defaultTtl?: number;
    forwardedValues: ForwardedValues;
    lambdaFunctionAssociations?: LambdaFunctionAssociations;
    maxTtl?: number;
    minTtl: number;
    smoothStreaming?: boolean;
    targetOriginId: string;
    trustedSigners: TrustedSigners;
    viewerProtocolPolicy: ViewerProtocolPolicyEnum;
}
