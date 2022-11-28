import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedMethods } from "./allowedmethods";
import { ForwardedValues } from "./forwardedvalues";
import { FunctionAssociations } from "./functionassociations";
import { LambdaFunctionAssociations } from "./lambdafunctionassociations";
import { TrustedKeyGroups } from "./trustedkeygroups";
import { TrustedSigners } from "./trustedsigners";
import { ViewerProtocolPolicyEnum } from "./viewerprotocolpolicyenum";
/**
 * A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
**/
export declare class DefaultCacheBehavior extends SpeakeasyBase {
    allowedMethods?: AllowedMethods;
    cachePolicyId?: string;
    compress?: boolean;
    defaultTtl?: number;
    fieldLevelEncryptionId?: string;
    forwardedValues?: ForwardedValues;
    functionAssociations?: FunctionAssociations;
    lambdaFunctionAssociations?: LambdaFunctionAssociations;
    maxTtl?: number;
    minTtl?: number;
    originRequestPolicyId?: string;
    realtimeLogConfigArn?: string;
    smoothStreaming?: boolean;
    targetOriginId: string;
    trustedKeyGroups?: TrustedKeyGroups;
    trustedSigners?: TrustedSigners;
    viewerProtocolPolicy: ViewerProtocolPolicyEnum;
}
