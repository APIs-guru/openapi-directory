import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepositoryCatalogDataInput
/** 
 * An object containing the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
**/
export class RepositoryCatalogDataInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=aboutText" })
  aboutText?: string;

  @Metadata({ data: "json, name=architectures" })
  architectures?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=logoImageBlob" })
  logoImageBlob?: string;

  @Metadata({ data: "json, name=operatingSystems" })
  operatingSystems?: string[];

  @Metadata({ data: "json, name=usageText" })
  usageText?: string;
}
