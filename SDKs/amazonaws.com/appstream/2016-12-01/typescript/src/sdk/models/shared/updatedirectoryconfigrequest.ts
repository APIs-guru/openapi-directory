import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountCredentials } from "./serviceaccountcredentials";



export class UpdateDirectoryConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryName" })
  directoryName: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnitDistinguishedNames" })
  organizationalUnitDistinguishedNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=ServiceAccountCredentials" })
  serviceAccountCredentials?: ServiceAccountCredentials;
}
