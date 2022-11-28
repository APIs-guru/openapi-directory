import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevEndpointCustomLibraries } from "./devendpointcustomlibraries";



export class UpdateDevEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddArguments" })
  addArguments?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=AddPublicKeys" })
  addPublicKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=CustomLibraries" })
  customLibraries?: DevEndpointCustomLibraries;

  @SpeakeasyMetadata({ data: "json, name=DeleteArguments" })
  deleteArguments?: string[];

  @SpeakeasyMetadata({ data: "json, name=DeletePublicKeys" })
  deletePublicKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @SpeakeasyMetadata({ data: "json, name=PublicKey" })
  publicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateEtlLibraries" })
  updateEtlLibraries?: boolean;
}
