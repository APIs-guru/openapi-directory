import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudMapInstanceAttribute } from "./awscloudmapinstanceattribute";



// AwsCloudMapServiceDiscovery
/** 
 * <p>An object that represents the Cloud Map service discovery information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note>
**/
export class AwsCloudMapServiceDiscovery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: AwsCloudMapInstanceAttribute })
  attributes?: AwsCloudMapInstanceAttribute[];

  @SpeakeasyMetadata({ data: "json, name=namespaceName" })
  namespaceName: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;
}
