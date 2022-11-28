import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNumberOfDomainControllersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DesiredNumber" })
  desiredNumber: number;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
