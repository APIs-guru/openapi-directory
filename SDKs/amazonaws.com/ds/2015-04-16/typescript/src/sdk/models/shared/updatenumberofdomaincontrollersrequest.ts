import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNumberOfDomainControllersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DesiredNumber" })
  desiredNumber: number;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
