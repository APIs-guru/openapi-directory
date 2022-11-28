import { SpeakeasyBase } from "../../../internal/utils";
import { PciId } from "./pciid";
import { ProductCode } from "./productcode";
import { FpgaImageState } from "./fpgaimagestate";
import { Tag } from "./tag";
/**
 * Describes an Amazon FPGA image (AFI).
**/
export declare class FpgaImage extends SpeakeasyBase {
    createTime?: Date;
    dataRetentionSupport?: boolean;
    description?: string;
    fpgaImageGlobalId?: string;
    fpgaImageId?: string;
    name?: string;
    ownerAlias?: string;
    ownerId?: string;
    pciId?: PciId;
    productCodes?: ProductCode[];
    public?: boolean;
    shellVersion?: string;
    state?: FpgaImageState;
    tags?: Tag[];
    updateTime?: Date;
}
