import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepositoryCatalogData
/** 
 * The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
**/
export class RepositoryCatalogData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aboutText" })
  aboutText?: string;

  @SpeakeasyMetadata({ data: "json, name=architectures" })
  architectures?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceCertified" })
  marketplaceCertified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=operatingSystems" })
  operatingSystems?: string[];

  @SpeakeasyMetadata({ data: "json, name=usageText" })
  usageText?: string;
}
