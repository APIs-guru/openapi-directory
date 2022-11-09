import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DevEndpointCustomLibraries } from "./devendpointcustomlibraries";


export class UpdateDevEndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddArguments" })
  addArguments?: Map<string, string>;

  @Metadata({ data: "json, name=AddPublicKeys" })
  addPublicKeys?: string[];

  @Metadata({ data: "json, name=CustomLibraries" })
  customLibraries?: DevEndpointCustomLibraries;

  @Metadata({ data: "json, name=DeleteArguments" })
  deleteArguments?: string[];

  @Metadata({ data: "json, name=DeletePublicKeys" })
  deletePublicKeys?: string[];

  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @Metadata({ data: "json, name=PublicKey" })
  publicKey?: string;

  @Metadata({ data: "json, name=UpdateEtlLibraries" })
  updateEtlLibraries?: boolean;
}
