import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepositoryCatalogDataInput
/** 
 * An object containing the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
**/
export class RepositoryCatalogDataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aboutText" })
  aboutText?: string;

  @SpeakeasyMetadata({ data: "json, name=architectures" })
  architectures?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=logoImageBlob" })
  logoImageBlob?: string;

  @SpeakeasyMetadata({ data: "json, name=operatingSystems" })
  operatingSystems?: string[];

  @SpeakeasyMetadata({ data: "json, name=usageText" })
  usageText?: string;
}
