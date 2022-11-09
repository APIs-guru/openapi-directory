import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceAccountCredentials } from "./serviceaccountcredentials";


export class CreateDirectoryConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryName" })
  directoryName: string;

  @Metadata({ data: "json, name=OrganizationalUnitDistinguishedNames" })
  organizationalUnitDistinguishedNames: string[];

  @Metadata({ data: "json, name=ServiceAccountCredentials" })
  serviceAccountCredentials?: ServiceAccountCredentials;
}
