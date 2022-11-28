import { SpeakeasyBase } from "../../../internal/utils";
import { CreateVolumePermission } from "./createvolumepermission";
import { ProductCode } from "./productcode";
export declare class DescribeSnapshotAttributeResult extends SpeakeasyBase {
    createVolumePermissions?: CreateVolumePermission[];
    productCodes?: ProductCode[];
    snapshotId?: string;
}
