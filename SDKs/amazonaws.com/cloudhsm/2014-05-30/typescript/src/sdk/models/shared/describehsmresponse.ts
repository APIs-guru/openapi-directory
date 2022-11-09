import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HsmStatusEnum } from "./hsmstatusenum";
import { SubscriptionTypeEnum } from "./subscriptiontypeenum";


// DescribeHsmResponse
/** 
 * Contains the output of the <a>DescribeHsm</a> operation.
**/
export class DescribeHsmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=EniId" })
  eniId?: string;

  @Metadata({ data: "json, name=EniIp" })
  eniIp?: string;

  @Metadata({ data: "json, name=HsmArn" })
  hsmArn?: string;

  @Metadata({ data: "json, name=HsmType" })
  hsmType?: string;

  @Metadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @Metadata({ data: "json, name=Partitions" })
  partitions?: string[];

  @Metadata({ data: "json, name=SerialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=ServerCertLastUpdated" })
  serverCertLastUpdated?: string;

  @Metadata({ data: "json, name=ServerCertUri" })
  serverCertUri?: string;

  @Metadata({ data: "json, name=SoftwareVersion" })
  softwareVersion?: string;

  @Metadata({ data: "json, name=SshKeyLastUpdated" })
  sshKeyLastUpdated?: string;

  @Metadata({ data: "json, name=SshPublicKey" })
  sshPublicKey?: string;

  @Metadata({ data: "json, name=Status" })
  status?: HsmStatusEnum;

  @Metadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=SubscriptionEndDate" })
  subscriptionEndDate?: string;

  @Metadata({ data: "json, name=SubscriptionStartDate" })
  subscriptionStartDate?: string;

  @Metadata({ data: "json, name=SubscriptionType" })
  subscriptionType?: SubscriptionTypeEnum;

  @Metadata({ data: "json, name=VendorName" })
  vendorName?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
