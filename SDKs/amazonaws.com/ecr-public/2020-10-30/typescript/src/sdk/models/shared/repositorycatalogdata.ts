import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepositoryCatalogData
/** 
 * The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
**/
export class RepositoryCatalogData extends SpeakeasyBase {
  @Metadata({ data: "json, name=aboutText" })
  aboutText?: string;

  @Metadata({ data: "json, name=architectures" })
  architectures?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @Metadata({ data: "json, name=marketplaceCertified" })
  marketplaceCertified?: boolean;

  @Metadata({ data: "json, name=operatingSystems" })
  operatingSystems?: string[];

  @Metadata({ data: "json, name=usageText" })
  usageText?: string;
}
