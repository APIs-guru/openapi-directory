import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateVolumePermission } from "./createvolumepermission";
import { ProductCode } from "./productcode";



export class DescribeSnapshotAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateVolumePermission })
  createVolumePermissions?: CreateVolumePermission[];

  @SpeakeasyMetadata({ elemType: ProductCode })
  productCodes?: ProductCode[];

  @SpeakeasyMetadata()
  snapshotId?: string;
}
