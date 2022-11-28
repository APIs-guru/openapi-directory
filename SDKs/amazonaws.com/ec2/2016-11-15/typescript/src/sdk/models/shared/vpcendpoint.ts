import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsEntry } from "./dnsentry";
import { SecurityGroupIdentifier } from "./securitygroupidentifier";
import { LastError } from "./lasterror";
import { StateEnum } from "./stateenum";
import { Tag } from "./tag";
import { VpcEndpointTypeEnum } from "./vpcendpointtypeenum";



// VpcEndpoint
/** 
 * Describes a VPC endpoint.
**/
export class VpcEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTimestamp?: Date;

  @SpeakeasyMetadata({ elemType: DnsEntry })
  dnsEntries?: DnsEntry[];

  @SpeakeasyMetadata({ elemType: SecurityGroupIdentifier })
  groups?: SecurityGroupIdentifier[];

  @SpeakeasyMetadata()
  lastError?: LastError;

  @SpeakeasyMetadata()
  networkInterfaceIds?: string[];

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  policyDocument?: string;

  @SpeakeasyMetadata()
  privateDnsEnabled?: boolean;

  @SpeakeasyMetadata()
  requesterManaged?: boolean;

  @SpeakeasyMetadata()
  routeTableIds?: string[];

  @SpeakeasyMetadata()
  serviceName?: string;

  @SpeakeasyMetadata()
  state?: StateEnum;

  @SpeakeasyMetadata()
  subnetIds?: string[];

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcEndpointId?: string;

  @SpeakeasyMetadata()
  vpcEndpointType?: VpcEndpointTypeEnum;

  @SpeakeasyMetadata()
  vpcId?: string;
}
