import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetAttributeEnum } from "./fleetattributeenum";
import { ComputeCapacity } from "./computecapacity";
import { DomainJoinInfo } from "./domainjoininfo";
import { StreamViewEnum } from "./streamviewenum";
import { VpcConfig } from "./vpcconfig";



export class UpdateFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributesToDelete" })
  attributesToDelete?: FleetAttributeEnum[];

  @SpeakeasyMetadata({ data: "json, name=ComputeCapacity" })
  computeCapacity?: ComputeCapacity;

  @SpeakeasyMetadata({ data: "json, name=DeleteVpcConfig" })
  deleteVpcConfig?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IdleDisconnectTimeoutInSeconds" })
  idleDisconnectTimeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=ImageArn" })
  imageArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxUserDurationInSeconds" })
  maxUserDurationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamView" })
  streamView?: StreamViewEnum;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
