import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeCapacity } from "./computecapacity";
import { DomainJoinInfo } from "./domainjoininfo";
import { FleetTypeEnum } from "./fleettypeenum";
import { StreamViewEnum } from "./streamviewenum";
import { VpcConfig } from "./vpcconfig";


export class CreateFleetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComputeCapacity" })
  computeCapacity: ComputeCapacity;

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

  @Metadata({ data: "json, name=StreamView" })
  streamView?: StreamViewEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
