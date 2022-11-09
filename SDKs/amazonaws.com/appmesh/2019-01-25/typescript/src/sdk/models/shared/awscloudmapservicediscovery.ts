import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsCloudMapInstanceAttribute } from "./awscloudmapinstanceattribute";


// AwsCloudMapServiceDiscovery
/** 
 * <p>An object that represents the Cloud Map service discovery information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note>
**/
export class AwsCloudMapServiceDiscovery extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.AwsCloudMapInstanceAttribute })
  attributes?: AwsCloudMapInstanceAttribute[];

  @Metadata({ data: "json, name=namespaceName" })
  namespaceName: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;
}
