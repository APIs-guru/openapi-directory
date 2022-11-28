import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=ComputeCapacityStatus" })
  computeCapacityStatus: ComputeCapacityStatus;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisconnectTimeoutInSeconds" })
  disconnectTimeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainJoinInfo" })
  domainJoinInfo?: DomainJoinInfo;

  @SpeakeasyMetadata({ data: "json, name=EnableDefaultInternetAccess" })
  enableDefaultInternetAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FleetErrors", elemType: FleetError })
  fleetErrors?: FleetError[];

  @SpeakeasyMetadata({ data: "json, name=FleetType" })
  fleetType?: FleetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IdleDisconnectTimeoutInSeconds" })
  idleDisconnectTimeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=ImageArn" })
  imageArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @SpeakeasyMetadata({ data: "json, name=MaxUserDurationInSeconds" })
  maxUserDurationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state: FleetStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StreamView" })
  streamView?: StreamViewEnum;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
