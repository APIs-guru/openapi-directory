import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HsmStatusEnum } from "./hsmstatusenum";
import { SubscriptionTypeEnum } from "./subscriptiontypeenum";



// DescribeHsmResponse
/** 
 * Contains the output of the <a>DescribeHsm</a> operation.
**/
export class DescribeHsmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=EniId" })
  eniId?: string;

  @SpeakeasyMetadata({ data: "json, name=EniIp" })
  eniIp?: string;

  @SpeakeasyMetadata({ data: "json, name=HsmArn" })
  hsmArn?: string;

  @SpeakeasyMetadata({ data: "json, name=HsmType" })
  hsmType?: string;

  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Partitions" })
  partitions?: string[];

  @SpeakeasyMetadata({ data: "json, name=SerialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerCertLastUpdated" })
  serverCertLastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerCertUri" })
  serverCertUri?: string;

  @SpeakeasyMetadata({ data: "json, name=SoftwareVersion" })
  softwareVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=SshKeyLastUpdated" })
  sshKeyLastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=SshPublicKey" })
  sshPublicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: HsmStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionEndDate" })
  subscriptionEndDate?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionStartDate" })
  subscriptionStartDate?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionType" })
  subscriptionType?: SubscriptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VendorName" })
  vendorName?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
