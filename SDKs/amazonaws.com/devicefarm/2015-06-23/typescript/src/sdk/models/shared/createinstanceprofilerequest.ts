import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateInstanceProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=excludeAppPackagesFromCleanup" })
  excludeAppPackagesFromCleanup?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=packageCleanup" })
  packageCleanup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rebootAfterUse" })
  rebootAfterUse?: boolean;
}
