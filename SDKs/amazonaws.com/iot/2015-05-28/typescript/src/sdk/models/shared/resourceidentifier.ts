import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyVersionIdentifier } from "./policyversionidentifier";



// ResourceIdentifier
/** 
 * Information that identifies the noncompliant resource.
**/
export class ResourceIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=caCertificateId" })
  caCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=cognitoIdentityPoolId" })
  cognitoIdentityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceCertificateId" })
  deviceCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=iamRoleArn" })
  iamRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=policyVersionIdentifier" })
  policyVersionIdentifier?: PolicyVersionIdentifier;

  @SpeakeasyMetadata({ data: "json, name=roleAliasArn" })
  roleAliasArn?: string;
}
