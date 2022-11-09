import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsPriorityPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Autorun, form, name=Autorun;" })
  autorun?: boolean;

  @Metadata({ data: "json, name=CRC, form, name=CRC;" })
  crc?: string;

  @Metadata({ data: "json, name=ClientID, form, name=ClientID;" })
  clientId: string;

  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @Metadata({ data: "json, name=Notes, form, name=Notes;" })
  notes?: string;

  @Metadata({ data: "json, name=PackageID, form, name=PackageID;" })
  packageId: string;

  @Metadata({ data: "json, name=PackageTypeID, form, name=PackageTypeID;" })
  packageTypeId?: string;

  @Metadata({ data: "json, name=PreviousVersion, form, name=PreviousVersion;" })
  previousVersion?: number;

  @Metadata({ data: "json, name=PriorityPackageID, form, name=PriorityPackageID;" })
  priorityPackageId?: string;

  @Metadata({ data: "json, name=ReleaseDate, form, name=ReleaseDate;" })
  releaseDate?: Date;

  @Metadata({ data: "json, name=Released, form, name=Released;" })
  released?: boolean;

  @Metadata({ data: "json, name=RemoveOnSuccess, form, name=RemoveOnSuccess;" })
  removeOnSuccess?: boolean;

  @Metadata({ data: "json, name=Size, form, name=Size;" })
  size?: number;

  @Metadata({ data: "json, name=Switches, form, name=Switches;" })
  switches?: string;

  @Metadata({ data: "json, name=TimeStamp, form, name=TimeStamp;" })
  timeStamp?: Date;

  @Metadata({ data: "json, name=Url, form, name=Url;" })
  url?: string;

  @Metadata({ data: "json, name=Version, form, name=Version;" })
  version?: number;
}
