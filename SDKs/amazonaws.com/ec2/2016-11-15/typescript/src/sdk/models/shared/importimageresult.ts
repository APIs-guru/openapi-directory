import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportImageLicenseConfigurationResponse } from "./importimagelicenseconfigurationresponse";
import { SnapshotDetail } from "./snapshotdetail";
import { Tag } from "./tag";



export class ImportImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  architecture?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  hypervisor?: string;

  @SpeakeasyMetadata()
  imageId?: string;

  @SpeakeasyMetadata()
  importTaskId?: string;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata({ elemType: ImportImageLicenseConfigurationResponse })
  licenseSpecifications?: ImportImageLicenseConfigurationResponse[];

  @SpeakeasyMetadata()
  licenseType?: string;

  @SpeakeasyMetadata()
  platform?: string;

  @SpeakeasyMetadata()
  progress?: string;

  @SpeakeasyMetadata({ elemType: SnapshotDetail })
  snapshotDetails?: SnapshotDetail[];

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  usageOperation?: string;
}
