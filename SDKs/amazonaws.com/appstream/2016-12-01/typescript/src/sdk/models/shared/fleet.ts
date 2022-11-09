import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComputeCapacityStatus } from "./computecapacitystatus";
import { DomainJoinInfo } from "./domainjoininfo";
import { FleetError } from "./fleeterror";
import { FleetTypeEnum } from "./fleettypeenum";
import { FleetStateEnum } from "./fleetstateenum";
import { StreamViewEnum } from "./streamviewenum";
import { VpcConfig } from "./vpcconfig";


// Fleet
/** 
 * Describes a fleet.
**/
export class Fleet extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=ComputeCapacityStatus" })
  computeCapacityStatus: ComputeCapacityStatus;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisconnectTimeoutInSeconds" })
  disconnectTimeoutInSeconds?: number;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=DomainJoinInfo" })
  domainJoinInfo?: DomainJoinInfo;

  @Metadata({ data: "json, name=EnableDefaultInternetAccess" })
  enableDefaultInternetAccess?: boolean;

  @Metadata({ data: "json, name=FleetErrors", elemType: shared.FleetError })
  fleetErrors?: FleetError[];

  @Metadata({ data: "json, name=FleetType" })
  fleetType?: FleetTypeEnum;

  @Metadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @Metadata({ data: "json, name=IdleDisconnectTimeoutInSeconds" })
  idleDisconnectTimeoutInSeconds?: number;

  @Metadata({ data: "json, name=ImageArn" })
  imageArn?: string;

  @Metadata({ data: "json, name=ImageName" })
  imageName?: string;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @Metadata({ data: "json, name=MaxUserDurationInSeconds" })
  maxUserDurationInSeconds?: number;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=State" })
  state: FleetStateEnum;

  @Metadata({ data: "json, name=StreamView" })
  streamView?: StreamViewEnum;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
