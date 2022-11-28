import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsPriorityPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Autorun, form, name=Autorun;" })
  autorun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CRC, form, name=CRC;" })
  crc?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientID, form, name=ClientID;" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes, form, name=Notes;" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=PackageID, form, name=PackageID;" })
  packageId: string;

  @SpeakeasyMetadata({ data: "json, name=PackageTypeID, form, name=PackageTypeID;" })
  packageTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=PreviousVersion, form, name=PreviousVersion;" })
  previousVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=PriorityPackageID, form, name=PriorityPackageID;" })
  priorityPackageId?: string;

  @SpeakeasyMetadata({ data: "json, name=ReleaseDate, form, name=ReleaseDate;" })
  releaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Released, form, name=Released;" })
  released?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RemoveOnSuccess, form, name=RemoveOnSuccess;" })
  removeOnSuccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Size, form, name=Size;" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=Switches, form, name=Switches;" })
  switches?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeStamp, form, name=TimeStamp;" })
  timeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Url, form, name=Url;" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=Version, form, name=Version;" })
  version?: number;
}
