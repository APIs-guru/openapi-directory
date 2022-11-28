import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedMethods } from "./allowedmethods";
import { ForwardedValues } from "./forwardedvalues";
import { LambdaFunctionAssociations } from "./lambdafunctionassociations";
import { TrustedSigners } from "./trustedsigners";
import { ViewerProtocolPolicyEnum } from "./viewerprotocolpolicyenum";



// DefaultCacheBehavior
/** 
 * A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
**/
export class DefaultCacheBehavior extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedMethods?: AllowedMethods;

  @SpeakeasyMetadata()
  compress?: boolean;

  @SpeakeasyMetadata()
  defaultTtl?: number;

  @SpeakeasyMetadata()
  fieldLevelEncryptionId?: string;

  @SpeakeasyMetadata()
  forwardedValues: ForwardedValues;

  @SpeakeasyMetadata()
  lambdaFunctionAssociations?: LambdaFunctionAssociations;

  @SpeakeasyMetadata()
  maxTtl?: number;

  @SpeakeasyMetadata()
  minTtl: number;

  @SpeakeasyMetadata()
  smoothStreaming?: boolean;

  @SpeakeasyMetadata()
  targetOriginId: string;

  @SpeakeasyMetadata()
  trustedSigners: TrustedSigners;

  @SpeakeasyMetadata()
  viewerProtocolPolicy: ViewerProtocolPolicyEnum;
}
